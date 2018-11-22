const app = new Vue({
    delimiters: ['${', '}'],
    el: '#app',
    data: {
        loadingSpiner: false,
        items: [

            {
                id: 'knott\'s-berry-farm-admission-tickets',
                title: 'Aquarium of the Bay & Ripley\'s Believe It or Not!',
                price: '$42.95',
                location: 'San Francisco, CA,',
                shortDescription: 'With dozens of rides, shows, roller coasters, and attractions in five themed areas, there is something for everyone ...',
                rating: 100,
                reviews: '',
                imageUrl: 'https://i.gse.io/gse_media/116/9/1476383189-Atlanta_NYElectric_2017_tickets.jpg?h=191&p=1&q=70&w=340&c=1, https://i.gse.io/gse_media/116/9/1476383189-Atlanta_NYElectric_2017_tickets.jpg?h=383&p=1&q=30&w=680&c=1 2x',
                flexXS: 'xs12',
                flexSM: 'sm12',
                flexMD: 'md12'
            },
            {
                id: 'knott\'s-berry-farm-admission-tickets',
                title: 'Aquarium of the Bay & Ripley\'s Believe It or Not!',
                price: '$42.95',
                location: 'San Francisco, CA,',
                shortDescription: 'With dozens of rides, shows, roller coasters, and attractions in five themed areas, there is something for everyone ...',
                rating: 100,
                reviews: '',
                imageUrl: 'https://i.gse.io/gse_media/118/7/1534797373-Aquarium-of-the-Pacific-Ripleys-Believe-it-or-Not-tickets.jpg?h=191&p=1&q=70&w=340&c=1, https://i.gse.io/gse_media/118/7/1534797373-Aquarium-of-the-Pacific-Ripleys-Believe-it-or-Not-tickets.jpg?h=383&p=1&q=30&w=680&c=1 2x',
                flexXS: 'xs12',
                flexSM: 'sm12',
                flexMD: 'md12'
            },
            {
                id: 'knott\'s-berry-farm-admission-tickets',
                title: 'Knott\'s Berry Farms',
                price: '$29.90',
                location: '8039 Beach Blvd, Buena Park, CA 90620,',
                shortDescription: 'With dozens of rides, shows, roller coasters, and attractions in five themed areas, there is something for everyone ...',
                rating: 100,
                reviews: '',
                imageUrl: 'https://i1.wp.com/www.lostwithyvonne.com/wp-content/uploads/2014/10/image.jpg?ssl=1',
                flexXS: 'xs12',
                flexSM: 'sm12',
                flexMD: 'md12'
            },
            {
                id: 'Knott\'s Soak City',
                title: 'Knott\'s Soak City',
                price: '$29.90',
                location: '8039 Beach Blvd, Buena Park, CA 90620,',
                shortDescription: 'Knott\'s Soak City is the only Waterpark in Orange County and features dozens of watersides, wave pool, lazy river and 7 new thrilling slides.',
                rating: '',
                reviews: '',
                imageUrl: 'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kb-en-us/banners/home/kbf-soakcityopening-desktop-banner.jpg',
                flexXS: 12,
                flexSM: 6,
                flexMD: 12
            },
            {
                id: 'CA Great America',
                title: 'CA Great America',
                price: '$29.90',
                location: '4701,Great America Parkway, 95054, San Francisco',
                shortDescription: 'A great time is waiting for you at California\'s Great America amusement park. Bring the family and enjoy the best attraction in California\'s Bay Area!',
                rating: '',
                reviews: '',
                imageUrl: 'http://farm4.static.flickr.com/3220/2339393557_34be155dc9.jpg',
                flexXS: 12,
                flexSM: 6
            },
            {
                id: 'ValleyFair',
                title: 'ValleyFair',
                price: '$29.90',
                location: '8039 Beach Blvd, Buena Park, CA 90620,',
                shortDescription: 'There\'s so much to discover at Valleyfair. Come visit the greatest amusement park in Minneapolis, Valleyfair, for adventure and excitement today!',
                rating: '',
                reviews: '',
                imageUrl: 'https://i.pinimg.com/736x/ef/80/e1/ef80e19bfc445346c35916ee67af5f3a--valley-fair-summer-fun.jpg',
                flexXS: 12,
                flexSM: 6
            },
            {
                id: 'Kings Island',
                title: 'Kings Island',
                price: '$29.90',
                location: '8039 Beach Blvd, Buena Park, CA 90620,',
                shortDescription: 'Join us for a fun filled adventure at the largest amusement and water park in the Midwest! Visit Kings Island, you\'re sure to have a great time!',
                rating: '',
                reviews: '',
                imageUrl: 'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kings-island/ctas/home/ki-rollercoasters-cta.jpg',
                flexXS: 12,
                flexSM: 6
            },
            {
                id: 'Kings Dominion',
                title: 'Kings Dominion',
                price: '$29.90',
                location: '8039 Beach Blvd, Buena Park, CA 90620,',
                shortDescription: 'There are so many fun things to do at Kings Dominion, Virginia\'s premier amusement park! With so many things to see, you\'ll need more than one day to enjoy it ...',
                rating: '',
                reviews: '',
                imageUrl: 'https://assets2.roadtrippers.com/uploads/poi_gallery_image/image/319742849/-quality_60_-interlace_Plane_-resize_1024x480_U__-gravity_center_-extent_1024x480/poi_gallery_image-image-c66f4a93-e447-44b1-9b1c-9bb7ed95b1e6.jpg',
                flexXS: 12,
                flexSM: 6
            },
            {
                id: 'Cedar Point',
                title: 'Cedar Point',
                price: '$29.90',
                location: '',
                shortDescription: 'Spend the day at Cedar Point, the roller coaster capital of the world. Plan your trip to the best amusement park in Ohio! Buy tickets to our theme park today!',
                rating: '',
                reviews: '',
                imageUrl: 'https://d2xcq4qphg1ge9.cloudfront.net/assets/374099/3603942/original_Cedar_Point_Halloweekends.jpg',
                flexXS: 12,
                flexSM: 6
            },
            {
                id: 'Michigan\'s Adventure',
                title: 'Michigan\'s Adventure',
                price: '$29.90',
                location: '',
                shortDescription: 'Come visit Michigan\'s largest amusement park and water park. There so much for the whole family to enjoy all season long! Start the summer today!',
                rating: '',
                reviews: '',
                imageUrl: 'https://mamaofmanyblessings.com/wp-content/uploads/2013/05/Beach-Party.jpg.pagespeed.ce.VcYa1F7-cR.jpg',
                flexXS: 12,
                flexSM: 6
            },
            {
                id: 'Six Flags Magic Mountain',
                title: 'Six Flags Magic Mountain',
                price: '$29.90',
                location: '',
                shortDescription: 'Get unlimited admission + waterpark + season parking and explore 50 brand new benefits we\'re offering for the first time! ',
                rating: '',
                reviews: '',
                imageUrl: 'https://cache.undercovertourist.com/media_file/six-flags-magic-mountain-6467.jpg',
                flexXS: 12,
                flexSM: 6
            }]
    },
    methods: {},
    mounted: {
        //alert("Hey")
    },
    computed: {}
})
