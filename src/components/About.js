import { Link } from "react-router-dom";
const About =()=>{
    return (
        <section class="text-gray-600 body-font px-10">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-green-500 tracking-widest font-medium title-font mb-1">Let's get started</h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Control your Carbon Footprint</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">DeCarbonUs is an App-based solution to help fight climate change by facilitating individuals to reduce and control their carbon footprint. Focused towards solving United nations SDGs</p>
        </div>
        <div class="flex flex-wrap">
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Analyze for C02 emission</h2>
            <p class="leading-relaxed text-base mb-4">Answer some questions and get a instant report on your carbon footprint.</p>
            <Link to="/calculate" class="text-green-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Get Personalized tracks</h2>
            <p class="leading-relaxed text-base mb-4">Follow personalized tracks to offset your emisson and move towrds sustanablity</p>
            <a href="#" class="text-green-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Connect with your friends</h2>
            <p class="leading-relaxed text-base mb-4">Find your friends and learn how they contribute towards making this world a better place to live.</p>
            <a href="#" class="text-green-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Explore local NGOs</h2>
            <p class="leading-relaxed text-base mb-4">Want to contribute?. Explore local NGO events around you and help them as volunteers.</p>
            <a href="#" class="text-green-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    )
}

export default About;