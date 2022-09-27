<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Borrowlist;
use App\Database\Factories\BrowerFactory;
class BrowerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $timeFirst  = strtotime(date("Y-m-d H:i:s"));

        Borrowlist::factory()->count(10)->create();
       
        $timeSecond = strtotime(date("Y-m-d H:i:s"));
        $differenceInSeconds = $timeSecond - $timeFirst;
        echo $differenceInSeconds;
    }
}
