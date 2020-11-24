<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

// add user for Authenticate
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // add user and admin by Seeder
        DB::table('users')->insert([
          [
            'name' => 'Maliha Mou',
            'username' => 'maliha_mou',
            'email' => 'maliha@gmail.com',
            'password' => Hash::make('123456'),
            'role' => 0,
            'role_type' => 'user',
            'date_of_birth' => '1996-3-14'
          ],[
            'name' => 'Sazal Ahamed',
            'username' => 'sazal_ahamed',
            'email' => 'sazal836@gmail.com',
            'password' => Hash::make('123456'),
            'role' => 2,
            'role_type' => 'admin',
            'date_of_birth' => '1995-2-23'
          ]
        ]);
    }
}
