<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function about(){
        return view('about');
    }

    // public function jobpage(){
    //     return view('jobpage');
    // }


    public function jobpage()
    {
        $jobs = Job::latest()->limit(15)->where('status', 1)->get();
        return view('jobpage', compact('jobs'));
    }
}
