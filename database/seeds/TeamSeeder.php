<?php

use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::statement("
            insert into `team` (`id`, `name`)
            value
            (1, 'Team - 1'),
            (2, 'Team - 2')
        ");
    }
}
