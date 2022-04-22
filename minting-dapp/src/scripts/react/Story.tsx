import React from 'react';

const Story: React.FC<{}> = () => {
  return (
    <>
      <div id='main-wrapper' className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-10'>
            <div className='card border-0 w3-rounded story-card'>
              <div className='card-body p-0'>
                <div className='row no-gutters'>
                  {/* This is the image */}
                  <div className='col-lg-4 d-none d-lg-inline-block'>
                    <div className='account-block rounded-Left'>
                      <div className=' rounded-Left'></div>
                      <div className='account-testimonial'>
                        {/* You can write anything over the image here */}
                      </div>
                    </div>
                  </div>
                  {/* This is the story part */}
                  <div className='col-lg-8'>
                    <div className='p-5'>
                      <h3 className='h4 font-weight-bold text-theme'>
                        Story Time
                      </h3>
                      <p className='story-text mb-5 h5'>
                        Ladies and Gents, the following clues are a series of
                        the most strange eventualities that have happened in the
                        past centuries. The International Data and Intelligence
                        Agency for Disappearances and Unusual Missings has been
                        receiving many reports from unusual disappearances and
                        people are missing more than ever, leaving no clue that
                        correlates within the known reality….
                      </p>

                      <form>
                        <div className='form-group'></div>
                        <div className='form-group mb-5'></div>
                        <button
                          type='submit'
                          className='btn btn-theme float-right mb-4'
                        >
                          Continue Reading...
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Story;
