
@include('frontend/partials.head')
@include('frontend/partials.nav')







<div id="app" class="site-blocks-cover overlay" style="background-image: url('external/images/hero_1.jpg');" data-aos="fade" data-stellar-background-ratio="0.5">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12" data-aos="fade">
        <h1 class="text-center">Job Banner</h1>
        
      
         
          
      </div>
    </div>
  </div>
</div>



<div class="site-section bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
          <h2 class="mb-5 h3">All Published Jobs</h2>
          <div class="rounded border jobs-wrap">

        
            @foreach ($jobs as $job)
          

            <a href="{{ route('job.show', [$job->id, $job->slug]) }}" class="job-item d-block d-md-flex align-items-center  border-bottom  
              
              @if($job->type =='fulltime')         
              fulltime
              @elseif($job->type =='freelance') 
              freelance  
              @elseif($job->type =='partime')   
              partime  
              @elseif($job->type =='remote')   
              remote
              @endif

              ">
              @if ($job->company->logo ?? '')
              <div class="company-logo blank-logo text-center text-md-left pl-3">
                <img src="{{ asset('/uploads/logo') }}/{{ $job->company->logo  ?? ''}}" alt="Image" class="img-fluid mx-auto">
              </div>
              @endif
              <div class="job-details h-100">
                <div class="p-3 align-self-center">
                  <h3>{{ $job->title }}</h3>
                  <div class="d-block d-lg-flex">
                    <div class="mr-3"><span class="icon-suitcase mr-1"></span> {{ Str::limit($job->position, 20)}}</div>
                    <div class="mr-3"><span class="icon-room mr-1"></span> {{ Str::limit($job->address, 20)}}</div>
                    <div><span class="icon-money mr-1"></span> ${{ $job->salary }}</div>
                    {{-- <div><span class="icon-eye ml-3 mr-1"></span> ${{ $job->salary }}</div> --}}
                  </div>
                </div>
              </div>
              <div class="job-category align-self-center">
                <div class="p-3">
                  <span class=" p-2 rounded border 

                  @if($job->type =='fulltime')         
                  text-info  border-info
                  @elseif($job->type =='freelance') 
                  text-warning   border-warning
                  @elseif($job->type =='partime')   
                  text-danger   border-danger
                  
                  @elseif($job->type =='remote')   
                  text-dark   border-dark
                  @endif
                  
                  ">{{  Str::ucfirst($job->type)}}</span>
                </div>
              </div>  
            </a>


            @endforeach




          </div>

          <div class="col-md-12 text-center mt-5">
            <a href="{{ route('alljobs') }}" class="btn btn-primary rounded py-3 px-5"><span class="icon-plus-circle"></span> Show More Jobs</a>
          </div>
        </div>
  
      </div>
    </div>
  </div>






@include('frontend/partials.footer')
