<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(VendorSeeder::class);
         $this->call(DriverSeeder::class);
         $this->call(UnitSeeder::class);
         $this->call(TeamSeeder::class);
         $this->call(TeamDriverSeeder::class);
    }
}
