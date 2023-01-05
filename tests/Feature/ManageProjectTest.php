<?php

namespace Tests\Feature;

use App\Actions\Project\AddProjectMember;
use App\Models\Project;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ManageProjectTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test if a project can be created and updated
     *
     * @return void
     */
    public function test_project_can_be_created_and_updated()
    {
        //Create a project belonging to a certain owner
        $this->actingAs($user = User::factory()->withPersonalTeam()->create());
        $project = Project::factory()->create([
            'owner_id' => $user->id,
        ]);

        //Check if entry got created in DB
        $project = $project->fresh();
        $this->assertDatabaseHas('projects', [
            'name' => $project->name,
        ]);

        //Update project
        $body = $this->prepareBody($project);
        $response = $this->updateProject($body, $project->id);
        $response->assertStatus(200);

        // //Check if entry got created in DB
        $project = $project->fresh();
        $this->assertDatabaseHas('projects', [
            'name' => $project->name,
        ]);
    }

    /**
     * Test if a project can be deleted
     *
     * @return void
     */
    public function test_project_can_be_deleted()
    {
        $this->actingAs($user = User::factory()->withPersonalTeam()->create());

        $project = Project::factory()->create(
            [
                'owner_id' => $user->id,
            ]
        );
        $creator = User::find($user->id);
        if (! is_null($creator)) {
            $project->users()->attach(
                $creator, ['role' => 'creator']
            );
        }

        $project = $project->fresh();
        $body = $this->prepareBody($project);

        //Delete project
        $response = $this->deleteProject($body, $project->id, $creator->password);
        $response->assertStatus(200);

        //Check if entry got deleted from DB
        $this->assertDatabaseMissing('projects', ['name' => $project->name]);
    }

    /**
     * Test if the project cannot be updated or deleted by the reviewer
     *
     * @return void
     */
    public function test_project_cannot_be_updated_or_deleted_by_reviewer()
    {
        $this->actingAs($user = User::factory()->withPersonalTeam()->create());

        $project = Project::factory()->create();
        $reviewer = User::find($user->id);
        if (! is_null($reviewer)) {
            $project->users()->attach(
                $reviewer, ['role' => 'reviewer']
            );
        }

        $body = $this->prepareBody($project);

        //Update project
        $response = $this->updateProject($body, $project->id);
        $response->assertStatus(403);

        //Delete project
        $response = $response = $this->deleteProject($body, $project->id, $reviewer->password);
        $response->assertStatus(403);
    }

    /**
     * Test if the project cannot be updated or deleted if project is made public
     *
     * @return void
     */
    public function test_project_cannot_be_updated_or_deleted_if_project_is_public()
    {
        $this->actingAs($user = User::factory()->withPersonalTeam()->create());

        $project = Project::factory()->create([
            'owner_id' => $user->id,
            'is_public' => true,
        ]);

        $creator = User::find($user->id);
        if (! is_null($creator)) {
            $project->users()->attach(
                $creator, ['role' => 'creator']
            );
        }

        $project = $project->fresh();
        $body = $this->prepareBody($project);

        //Update project
        $response = $this->updateProject($body, $project->id);
        $response->assertStatus(403);

        //Delete project
        $response = $response = $this->deleteProject($body, $project->id, $creator->password);
        $response->assertStatus(403);
    }

    /**
     * Test if the project can be shared
     *
     * @return void
     */
    public function test_project_can_be_shared()
    {
        Mail::fake();

        $this->actingAs($user = User::factory()->withPersonalTeam()->create());

        $project = Project::factory()->create([
            'owner_id' => $user->id,
        ]);

        //Share project
        $body = $this->prepareBody($project);
        $response = $this->shareProject($body, $project->id);
        //Mail::assertSent(AddProjectMember::class);
        $response->assertStatus(303);
    }

    /**
     * Prepare request body for project
     *
     * @param  \App\Models\Project  $project
     * @return array $body
     */
    public function prepareBody($project)
    {
        $body = [];
        if ($project) {
            $body =
            [
                'id' => $project->id,
                'name' => $project->name.'_updated',
                'slug' => $project->slug,
                'color' => $project->color,
                'starred' => $project->starred,
                'is_public' => $project->is_public,
                'is_deleted' => $project->is_deleted,
                'is_archived' => $project->is_archived,
                'status' => $project->status,
                'process_logs' => $project->process_logs,
                'location' => $project->location,
                'url' => $project->url,
                'description' => $project->description,
                'sort_order' => $project->sort_order,
                'type' => $project->type,
                'uuid' => $project->uuid,
                'access' => $project->access,
                'access_type' => $project->access_type,
                'team_id' => $project->team_id,
                'owner_id' => $project->owner_id,
                'license_id' => $project->license_id,
                'draft_id' => $project->draft_id,
                'fs_id' => $project->fs_id,
                'release_date' => $project->release_date,
                'project_photo_path' => $project->project_photo_path,
                'created_at' => $project->created_at,
                'updated_at' => $project->updated_at,
                'doi' => $project->doi,
                'datacite_schema' => $project->datacite_schema,
                'identifier' => $project->identifier,
                'validation_id' => $project->validation_id,
                'schema_version' => $project->schema_version,
                'internal_status' => $project->internal_status,
            ];
        }

        return $body;
    }

    /**
     * Make Request to update project
     *
     * @param  \App\Models\Project  $body
     * @param  int  $projectId
     * @return \Illuminate\Http\Response
     */
    public function updateProject($body, $projectId)
    {
        return $this->withHeaders([
            'Accept' => 'application/json',
        ])->put('dashboard/projects/'.$projectId.'/update', $body);
    }

    /**
     * Make Request to delete project
     *
     * @param  \App\Models\Project  $project
     * @param  int  $projectId
     * @return \Illuminate\Http\Response
     */
    public function deleteProject($body, $projectId, $password)
    {
        return $this->withHeaders([
            'Accept' => 'application/json',
            'password' => $password,
        ])->delete('dashboard/projects/'.$projectId, $body);
    }

    /**
     * Make Request to share project
     *
     * @param  \App\Models\Project  $project
     * @param  int  $projectId
     * @return \Illuminate\Http\Response
     */
    public function shareProject($body, $projectId)
    {
        return $this->withHeaders([
            'Accept' => 'application/json',
            'email' => 'test@example.com',
            'message' => '',
            'role' => 'collaborator',
        ])->post('dashboard/projects/'.$projectId.'members', $body);
    }
}
