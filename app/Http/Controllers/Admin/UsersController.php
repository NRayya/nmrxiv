<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\PasswordValidationRules;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Laravel\Fortify\Contracts\UpdatesUserProfileInformation;
use Spatie\Permission\Models\Role;

class UsersController extends Controller
{
    use PasswordValidationRules;

    /**
     * Render the index page with list of users.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Pages\Console\Users\Index
     */
    public function index(Request $request)
    {
        return Inertia::render('Console/Users/Index', [
            'filters' => $request->all('search', 'owner', 'role', 'trashed'),
            'users' => User::orderBy('name')
                ->filter($request->only('search', 'owner', 'role', 'trashed'))
                ->get()
                ->transform(function ($user) {
                    return [
                        'id' => $user->id,
                        'first_name' => $user->first_name,
                        'last_name' => $user->last_name,
                        'email' => $user->email,
                        'profile_photo_url' => $user->profile_photo_url,
                        'verified_at' => $user->email_verified_at,
                        'role' => $user->getRoleNames(),
                    ];
                }),
            'roles' => Role::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name', 'description'),
        ]);
    }

    /**
     * Render the create user page.
     *
     * @return \Pages\Console\Users\Create
     */
    public function create()
    {
        return Inertia::render('Console/Users/Create', [
            'roles' => Role::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
        ]
        );
    }

    /**
     * Store the newly created user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Actions\Fortify\CreateNewUser  $creator
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request, CreateNewUser $creator)
    {
        $user = $creator->create($request->all());
        event(new Registered($user));

        return redirect()->route('console.users')->with('success', 'User created successfully');
    }

    /**
     * Render the edit user page.
     *
     * @param  \App\Models\User  $user
     * @return \Pages\Console\Users\Edit
     */
    public function edit(User $user)
    {
        return Inertia::render('Console/Users/Edit', [
            'edituser' => [
                'id' => $user->id,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
                'profile_photo_url' => $user->profile_photo_url,
            ],
        ]);
    }

    /**
     * Save the updated user info.
     *
     * @param  \App\Models\User  $user
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Actions\Fortify\UpdateUserProfileInformation  $updater
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(User $user, Request $request, UpdatesUserProfileInformation $updater)
    {
        $updater->update($user, $request->all());

        return $request->wantsJson() ? new JsonResponse('', 200) : back()->with('success', 'Profile updated succesfully');
    }

    /**
     * Save the updated password for the user.
     *
     * @param  \App\Models\User  $user
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function updatePassword(User $user, Request $request)
    {
        Validator::make($request->all(), [
            'password' => $this->passwordRules(),
        ])->validateWithBag('updatePassword');

        $user->forceFill([
            'password' => Hash::make($request['password']),
        ])->save();

        return $request->wantsJson() ? new JsonResponse('', 200) : back()->with('success', 'Profile updated succesfully');
    }

    /**
     * Save the updated role for the user.
     *
     * @param  \App\Models\User  $user
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function updateRole(User $user, Request $request)
    {
        Validator::make($request->all(), [
            'role' => 'required',
        ]);

        if (Auth::user()->id == $user->id) {
            return $request->wantsJson() ? new JsonResponse('', 405) : back()->withErrors([
                'error_message' => 'Updating currently logged in user role is not allowed.',
            ]);
        }

        $role = $request->get('role');

        if ($user && $role) {
            $user->syncRoles([$role]);
        }

        return $request->wantsJson() ? new JsonResponse('', 200) : back()->with('success', 'Profile updated succesfully');
    }

    /**
     * Check if user has password.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function checkPassword(Request $request)
    {
        $user = $request->user();
        $hasPassword = false;
        if ($user->password) {
            $hasPassword = true;
        }

        return response()->json([
            'hasPassword' => $hasPassword,
        ]);
    }

    /**
     * Delete the profile photo.
     *
     * @param  \App\Models\User  $user
     * @param  \Illuminate\Http\Request  $request
     *  @return \Illuminate\Http\RedirectResponse
     */
    public function destroyPhoto(User $user, Request $request)
    {
        $user->deleteProfilePhoto();

        return back(303)->with('status', 'profile-photo-deleted');
    }
}
