<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Announcement;
use App\Models\User;
use App\Models\Team;
use Carbon\Carbon;


class AnnouncementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        // Get the first super admin account
        $admin = User::role('super-admin')->first();

        // If doesnt exist create one and assign the role super admin
        if(is_null($admin)){
            $admin = User::create([
                'first_name'        => "Super admin",
                'last_name'         => "User",
                'email'             => 'superadmin@email.com',
                'password'          => bcrypt('secret'),
                'email_verified_at' => Carbon::now()
            ]);

            $admin->ownedTeams()->save(Team::forceCreate([
                'user_id'       => $admin->id,
                'name'          => explode(' ', $admin->first_name, 2)[0]."'s Team",
                'personal_team' => boolval(1),
            ]));
    
            $admin->assignRole('super-admin');
        } 

        //Creating seeder for the announcement table
        $announcement = Announcement::create([
            'title'       => "Scheduled-Maintenace",
            'message'     => "Dear User, You may experience sudden downtime on 12/10/2021 for few hours between 12-2 pm CET, due to some mandatory scheduled maintenance of the site. Apologies for any inconvenience caused. ",
            'status'      => "inactive",
            'start_time'  => '12/10/2021 12:00:00',
            'end_time'    => '12/10/2021 14:00:00',
            'user_id'     => $admin->id,
        ]);
    }
}