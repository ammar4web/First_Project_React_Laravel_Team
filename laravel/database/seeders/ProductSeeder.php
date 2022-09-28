<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 1
        DB::table('products')->insert([
            'title' => 'HTML Course',
            'description' => 'This description For HTML Course',
        ]);
        // 2
        DB::table('products')->insert([
            'title' => 'CSS Course',
            'description' => 'This description For CSS Course',
        ]);
        // 3
        DB::table('products')->insert([
            'title' => 'JavaScrip Course',
            'description' => 'This description For JavaScrip Course',
        ]);
        // 4
        DB::table('products')->insert([
            'title' => 'PHP Course',
            'description' => 'This description For PHP Course',
        ]);
        // 5
        DB::table('products')->insert([
            'title' => 'Laravel Course',
            'description' => 'This description For Laravel Course',
        ]);
    }
}
