import './Home.css'


export default function Home() {


    return (
        <>
            <div class="home bg-dark">
                <div class="banner">
                    <img class='bg1' src='./images/bk1.png' />
                    <img class='bg2' src='./images/circle.png' />
                    <img class='bg3' src='./images/Image_1.png' />
                    <div class='content overlay'>
                        <strong >Welcome to Kushel Digi</strong>
                        <h2>IT Consulting Services For <br /> Your Buisiness</h2>
                        <p>We are leading technology solutions providing company all over the world doing over 40 years.</p>
                        <button class='btn btn-outline-info'>Read more</button>
                    </div>
                </div>

                <div class="whoAreWe pb-5">
                    <div class="container">
                        <div class="row">
                            <div className='col-md-6'>
                                <img src='./images/23.png' />
                            </div>
                            <div className='col-md-6'>
                                <strong>Who we are</strong>
                                <h2>Your digital partner to create inspirational design and robust solution for Web, Mobile & Cloud.</h2>
                                <p>The top-notch and preeminent Web and Mobile App Development Company of India with its global presence in USA, MindInventory is first-rate choice of the clients worldwide. With sheer customer satisfaction in mind, we are profoundly dedicated to developing highly intriguing apps that strictly meet the business requirements and catering a wide spectrum of projects.
                                </p>
                                <button class='btn btn-outline-info'>About us</button>
                            </div>
                        </div>
                    </div>
                </div>

                


            </div>


        </>
    )
}


