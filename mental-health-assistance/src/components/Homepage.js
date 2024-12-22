import React from 'react';

const Homepage = () => {
    return (
        <main className="container mt-5">
            <div className="text-center">
                <h1>Welcome to Mental Health Support Platform</h1>
                <p>Your mental health matters</p>
            </div>
            <section className="mt-5 section-videos">
                <h2>Self Help Videos</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/example1" title="How to Manage Stress" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">How to Manage Stress</h5>
                                <p className="card-text">Learn effective techniques to manage stress in your daily life.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/example2" title="Mindfulness Meditation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">Mindfulness Meditation</h5>
                                <p className="card-text">A guided mindfulness meditation session to help you relax.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/example3" title="Building Resilience" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">Building Resilience</h5>
                                <p className="card-text">Tips and strategies to build resilience and cope with challenges.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5 section-articles">
                <h2>Articles</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">The Importance of Sleep</h5>
                                <p className="card-text">Sleep is crucial for your mental and physical health. It helps your body repair and rejuvenate, improves cognitive function, and boosts your immune system. Lack of sleep can lead to various health issues, including anxiety, depression, and weakened immunity.</p>
                                <a href="https://example.com/article1" className="btn btn-info">Read Article</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Healthy Eating Habits</h5>
                                <p className="card-text">Developing healthy eating habits is essential for maintaining overall well-being. A balanced diet provides the necessary nutrients for your body to function optimally, supports mental health, and reduces the risk of chronic diseases.</p>
                                <a href="https://example.com/article2" className="btn btn-info">Read Article</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Exercise and Mental Health</h5>
                                <p className="card-text">Physical activity has a profound impact on mental health. Regular exercise releases endorphins, which are natural mood lifters. It also helps reduce stress, anxiety, and symptoms of depression, while improving self-esteem and cognitive function.</p>
                                <a href="https://example.com/article3" className="btn btn-info">Read Article</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5 section-podcasts">
                <h2>Podcasts</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Mental Health Matters</h5>
                                <p className="card-text">A podcast discussing various mental health topics and tips.</p>
                                <audio controls>
                                    <source src="https://example.com/podcast1.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <div className="d-flex justify-content-center">
                                <a href="https://example.com/podcast3" className="btn btn-primary mt-2">Listen to Podcast</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Mindful Living</h5>
                                <p className="card-text">Explore mindfulness practices and how they can improve your life.</p>
                                <audio controls>
                                    <source src="https://example.com/podcast2.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <div className="d-flex justify-content-center">
                                <a href="https://example.com/podcast3" className="btn btn-primary mt-2">Listen to Podcast</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Resilience and Growth</h5>
                                <p className="card-text">Stories and strategies for building resilience and personal growth.</p>
                                <audio controls>
                                    <source src="https://example.com/podcast3.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <div className="d-flex justify-content-center">
                                <a href="https://example.com/podcast3" className="btn btn-primary mt-2">Listen to Podcast</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5 section-therapists">
                <h2>Our Therapists</h2>
                <div id="therapistCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Dr. Jane Doe" />
                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Jane Doe</h5>
                                            <p className="card-text">Specialization: Cognitive Behavioral Therapy</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Dr. John Smith" />
                                        <div className="card-body">
                                            <h5 className="card-title">Dr. John Smith</h5>
                                            <p className="card-text">Specialization: Psychodynamic Therapy</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Dr. Emily Johnson" />
                                        <div className="card-body">
                                            <h5 className="card-title">Dr. John Smith</h5>
                                            <p className="card-text">Specialization: Psychodynamic Therapy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Dr. Jane Doe" />
                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Jane Doe</h5>
                                            <p className="card-text">Specialization: Cognitive Behavioral Therapy</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Dr. John Smith" />
                                        <div className="card-body">
                                            <h5 className="card-title">Dr. John Smith</h5>
                                            <p className="card-text">Specialization: Psychodynamic Therapy</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Dr. Emily Johnson" />
                                        <div className="card-body">
                                            <h5 className="card-title">Dr. John Smith</h5>
                                            <p className="card-text">Specialization: Psychodynamic Therapy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Dr. Jane Doe" />
                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Jane Doe</h5>
                                            <p className="card-text">Specialization: Cognitive Behavioral Therapy</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Dr. John Smith" />
                                        <div className="card-body">
                                            <h5 className="card-title">Dr. John Smith</h5>
                                            <p className="card-text">Specialization: Psychodynamic Therapy</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Dr. Emily Johnson" />
                                        <div className="card-body">
                                            <h5 className="card-title">Dr. John Smith</h5>
                                            <p className="card-text">Specialization: Psychodynamic Therapy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#therapistCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span> </a>
            <a className="carousel-control-next" href="#therapistCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span> </a>
            </div>
            
        
          
        
        
      </section >
    </main >);
};  

export default Homepage;