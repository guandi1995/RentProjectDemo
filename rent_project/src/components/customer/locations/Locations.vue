<template>
    <div>
        <Header/>

        <!-- locations jumbotron -->
        <div class="jumbotron" style="text-align: center">
            <h1 class="display-3">OUR LOCATIONS</h1>
            <p class="lead">Our communities are located in Orange County and San Diego County</p>
            <hr class="my-4">
            <p>Communities in Los Angeles County is coming soon</p>
            <p class="lead">
                <a class="btn btn-outline-secondary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>

        <!-- cards -->
        <div class="card-deck" style="margin-left: 150px; margin-right: 150px; margin-bottom: 30px">
            <!-- san diego card -->
            <div class="card shadow-lg bg-white rounded">
                <img class="card-img-top" src="@/assets/images/customer/locations/sandiego.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">SAN DIEGO COUNTY</h5>
                    <p class="card-text">Idyllic sun-to-sand landscapes, globally-ranked universities, and many of California's
                        best entertainment, shopping, and dining experiences are just beyond your door when you live forward in
                        a San Diego apartment community.</p>
                    <div class="card-header">
                        Communities
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><a href="/rent/customer/locations/san-diego/la-jolla-palms" class="text-secondary">La Jolla Palms</a></li>
                        <li class="list-group-item"><a href="/rent/customer/locations/san-diego/solazzo" class="text-secondary">Solazzo</a></li>
                        <li class="list-group-item"><a href="/rent/customer/locations/san-diego/vor" class="text-secondary">The Villas of Renaissance</a></li>
                    </ul>
                </div>
            </div>
            
            <!-- orange card -->
            <div class="card">
                <img class="card-img-top" src="@/assets/images/customer/locations/orange.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">ORANGE COUNTY</h5>
                    <p class="card-text">Our Orange County apartment communities offer residents a lifestyle that has it all.
                        Enjoy upscale shopping, dining, and cultural experiences plus top schools, innovative workplaces,
                        and America's most beautiful beaches just beyond your door.</p>
                    <div class="card-header">
                        Communities
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><a href="/locations/orange/turtle-ridge" class="text-secondary">Turtle Ridge</a></li>
                        <li class="list-group-item"><a href="/locations/orange/pelican-hills" class="text-secondary">Pelican Hills</a></li>
                        <li class="list-group-item"><a href="/locations/orange/irvine-spectrum-vita" class="text-secondary">Irvine Spectrum Vita</a></li>
                    </ul>
                </div>
            </div>

            <!-- la card -->
            <div class="card">
                <img class="card-img-top" src="@/assets/images/customer/locations/losangeles.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">LOS ANGELES COUNTY</h5>
                    <p class="card-text">With a luxury-first approach beyond the expected, our LA apartment communities
                        are designed to delight even the most discerning Angelenos. At home and out and about, enjoy the
                        best of everything in Southern California's most electrifiying city.</p>
                </div>
                <div class="card-header">
                    Communities(coming soon)
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><a href="#" class="text-secondary">Santa Monica Village</a></li>
                    <li class="list-group-item"><a href="#" class="text-secondary">Downtown M11</a></li>
                </ul>
            </div>

        </div>

        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/public/Header'
import Footer from '@/components/public/Footer'

export default {
    name:"Locations",
    components:{
    //import Header and Footer
    Header,
    Footer,
  }
}
</script>