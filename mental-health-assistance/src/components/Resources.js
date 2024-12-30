import React, { useState } from 'react';

// const ArticlesSection = () => {
//     const [showFullArticle, setShowFullArticle] = useState(false);
// };
//     const toggleArticleView = () => {
//         setShowFullArticle(!showFullArticle); // Correct function is defined here
//     };

const Resources = () => {
    // const [showFullArticle, setShowFullArticle] = useState(false);
    // const resourcesPage = () => {
    //     navigate('/resources'); // Navigate to Resources page
    //   };

    return (
        <main className="container mt-5">
            <div className="text-center">
                <h1>Welcome to Mental Health Support Platform</h1>
                <p>Your mental hesalth matters</p>
               
            </div>
            <section className="mt-5 section-videos">
                <h2>Self Help Videos</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200"  src="https://www.youtube.com/embed/example1" title="How To Relieve Anxiety In One Minute" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">How To Relieve Anxiety In One Minute</h5>
                                <p className="card-text">Having some terrible panic attacks the past couple of weeks over something completely irrational and stupid.
                                    Exercise for relieve anxiety in one minute
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200"  src="https://www.youtube.com/embed/example1" title="How To Deal With Depression?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">How To Deal With Depression?</h5>
                                <p className="card-text">A guided tips session to help you relax.Mindfulness can help you stay grounded and reduce overthinking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/example1" title="How to hack your brain for better focus" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">How to hack your brain for better focus</h5>
                                <p className="card-text">The modern world constantly fragments our attention. In this funny, insightful talk that how to hack the brain's Default</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          

            <section className="mt-5 section-videos">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/example1" title="A 10 minute Guided Meditation for your Overactive Mind" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">A 10 minute Guided Meditation for your Overactive Mind</h5>
                                <p className="card-text">Listening to this 10-minute guided meditation can be a transformative experience for anyone struggling with an overactive mind.  </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200" overflow="hidden" src="https://www.youtube.com/embed/example1" title="4 Small Habits To Improve Self Esteem" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">4 Small Habits To Improve Self Esteem</h5>
                                <p className="card-text">Self esteem is defined as the degree to which qualities and characteristics inside one’s self-concept are perceived to be positive. In short, it is your opinion of yourself.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/example1" title="5 Ways to Deal with Anxiety" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">5 Ways to Deal with Anxiety</h5>
                                <p className="card-text">Dr. Hansaji Yogendra explains how to deal with anxiety in 5 simple ways. Due to COVID-19, we have faced a lot of mental health issues in the society. This video will help you to deal with these issues.</p>
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
                                <h5 className="card-title">Importance of Regular Breaks and Mental Health Days</h5>
                                <p className="card-text">
                                   
                                        Encouraging employees to take regular breaks and mental health days is vital for maintaining a sustainable and productive work environment. Overworking and ignoring the need for rest can lead to burnout, decreased creativity, and poor decision-making.
                                        <a href="https://www.youtube.com/watch?v=PBaFURjVrm0" className="btn btn-info">Read Article</a>
                                        <br />
                            </p>
            
                                {/* <a href="https://youtu.be/TEwoWxLwCfA" className="btn btn-info">Read Article</a> */}
                            </div>
                        </div>
                    </div>



                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">brain Eating Habits</h5>
                                <p className="card-text">Developing healthy eating habits is essential for maintaining overall well-being. A balanced diet provides the necessary nutrients for your body to function optimally, supports mental health, and reduces the risk of chronic diseases.</p>
                                <a href="https://www.youtube.com/watch?v=PBaFURjVrm0" className="btn btn-info">Read Article</a>
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

                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Importance of Regular Breaks and Mental Health Days</h5>
                                <p className="card-text">
                                   
                                        Encouraging employees to take regular breaks and mental health days is vital for maintaining a sustainable and productive work environment. Overworking and ignoring the need for rest can lead to burnout, decreased creativity, and poor decision-making.
                                        <a href="https://www.youtube.com/watch?v=PBaFURjVrm0" className="btn btn-info">Read Article</a>
                                        <br />
                            </p>
            
                                {/* <a href="https://youtu.be/TEwoWxLwCfA" className="btn btn-info">Read Article</a> */}
                            </div>
                        </div>
                    </div>



                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">brain Eating Habits</h5>
                                <p className="card-text">Developing healthy eating habits is essential for maintaining overall well-being. A balanced diet provides the necessary nutrients for your body to function optimally, supports mental health, and reduces the risk of chronic diseases.</p>
                                <a href="https://www.youtube.com/watch?v=PBaFURjVrm0" className="btn btn-info">Read Article</a>
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
            {/* <section className="mt-5 section-therapists">
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
            
        
          
        
        
      </section > */}
    </main >);
};  

export default Resources;