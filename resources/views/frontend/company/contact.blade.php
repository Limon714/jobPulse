@extends('layouts.main')

@section('content')

<div style="height: 95px;"></div>
<div class="unit-5 overlay" style="background-image: url({{ asset('external/images/hero_2.jpg') }})">
    <div class="container text-center">
      <h1 class="mb-0" style="    color: #fff;
      font-size: 2.5rem;">Contact Banner</strong></h1>
      </div>
</div>
  


<div class="site-section bg-light">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="featured-title">
                    <h2>Contact Us</h2>
                    <p>Address : Kurigram, Rangpur, Dhaka</p>
                    <p>Phone : 01741046078</p>
                    <p>Email : limon4u714@gmail.com</p>
                </div>
            </div>
        
       
            <div class="col">
                <div class="featured-title">
                    <h2>Get in touch</h2>
                    <form action="" method="">
                        <input type="text" class="form-control" name="name" id="" placeholder="Enter your first name">
                        <br>
                        
                        <input type="text" class="form-control" name="email" id="" placeholder="Enter your Email Address">
                       
                        <br>
                        <input type="text" class="form-control" name="subject" id="" placeholder="Enter your subject">
                        
                        <br>
                        <input type="text" class="form-control" name="mobile" id="" placeholder="Enter your mobile number">
                        <br>
                        
                       <textarea name="" id="" class="form-control" cols="30" rows="10"></textarea>
                       <br>
                       <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
       
        </div>

        <div class="row">
            <div class="col-md-12 text-center mt-5">
                <div class="featured-title">
                    <h2>Companies believe in us</h2>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <img src="/uploads/logo/logo1.png" alt="">
                            </div>
                            <div class="col"><img src="/uploads/logo/logo2.png" alt=""></div>
                            <div class="col"><img src="/uploads/logo/logo3.png" alt=""></div>
                            <div class="col"><img src="/uploads/logo/logo4.png" alt=""></div>
                            <div class="col"><img src="/uploads/logo/logo5.png" alt=""></div>
                        </div>
                    </div>
                </div>
              </div>
        </div>

    </div>
  </div>
  



@endsection
<style>
    .company-card{
          -webkit-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    transition: 0.3s all ease;
    }
    .company-card:hover{
        background: #fff;
        -webkit-box-shadow: 4px 0 40px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 4px 0 40px 0 rgba(0, 0, 0, 0.1);
        z-index: 2;    -webkit-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    transition: 0.3s all ease;    border: 1px solid #218838;
    }
    </style>
    