<template>
  <div>
    <!-- sub-nav for la jolla palms -->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 rounded"
    >
      <div
        class="collapse navbar-collapse"
        style="margin-left: 10%; margin-right: 10%"
      >
        <a
          class="navbar-brand .mr-auto"
          href="/rent/customer/locations/san-diego/la-jolla-palms"
          >La Jolla Palms</a
        >
      </div>
      <div
        class="collapse navbar-collapse justify-content-end"
        style="margin-left: 10%; margin-right: 10%"
      >
        <ul class="navbar-nav navbar-right">
          <li class="nav-item">
            <a
              class="nav-link"
              href="/rent/customer/locations/san-diego/la-jolla-palms"
              >OVERVIEW</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="/rent/customer/locations/san-diego/la-jolla-palms/availability"
              >AVAILABILITY</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="modal"
              data-target="#scheduleTourModal"
              href=""
              >SCHEDULE TOUR</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="modal"
              data-target="#contactusModal"
              href=""
              >CONTACT US</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- schedule a tour -->
    <div
      class="modal fade"
      id="scheduleTourModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">SCHEDULE A TOUR</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="margin-left: 30px; margin-right: 30px">
            <p>
              To provide the safest touring experience, we are currently only
              offering Self-Guided tours. Select an available date and time
              below to book your appointment, and a friendly Leasing Associate
              will be in touch to create your customized tour. You will also
              receive instructions to download TourGuide, our easy-to-use
              touring mobile app. The app will provide step-by-step instructions
              on your mobile device to guide you around the community to the
              available homes that meet your needs.
            </p>
            <hr />
            <form>
              <div class="form-group">
                <label for="firstname" class="col-form-label"
                  >First Name:</label
                >
                <input type="text" class="form-control" id="firstname" />
              </div>

              <div class="form-group">
                <label for="lastname" class="col-form-label">Last Name:</label>
                <input type="text" class="form-control" id="lastname" />
              </div>

              <div class="form-group">
                <label for="email" class="col-form-label">Email:</label>
                <input type="email" class="form-control" id="email" />
              </div>

              <div class="form-group">
                <label for="phone" class="col-form-label">Phone:</label>
                <input type="text" class="form-control" id="phone" />
              </div>

              <!--                    datepicker in modal, reference https://www.codehim.com/date-time/bootstrap-datepicker-in-modal-popup-window/-->
              <!-- <div class="form-group">
                    <label for="datepicker" class="col-form-label"
                    >Desired Tour Date:</label
                    >
                    <input
                    type="text"
                    class="form-control"
                    data-toggle="datepicker"
                    id="datepicker"
                    />
                </div> -->

              <div class="form-group">
                <label for="comments" class="col-form-label">Comments:</label>
                <textarea
                  class="form-control"
                  rows="5"
                  name="textarea"
                  id="comments"
                ></textarea>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-warning">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- contact us -->
    <div
      class="modal fade"
      id="contactusModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">CONTACT US</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body" style="margin-left: 30px; margin-right: 30px">
            <h6>Leasing Office</h6>
            844.354.7750<br />
            3535 Lebon Dr, Ste. 1000 San Diego, CA 92122
            <hr />
            <h6>Residence Services</h6>
            858.784.0100<br />
            <hr />
            <h6>Send a Message</h6>
            <form>
              <div class="form-group">
                <label for="firstname1" class="col-form-label"
                  >First Name:</label
                >
                <input type="text" class="form-control" id="firstname1" />
              </div>

              <div class="form-group">
                <label for="lastname1" class="col-form-label">Last Name:</label>
                <input type="text" class="form-control" id="lastname1" />
              </div>

              <div class="form-group">
                <label for="email1" class="col-form-label">Email:</label>
                <input type="email" class="form-control" id="email1" />
              </div>

              <div class="form-group">
                <label for="phone1" class="col-form-label">Phone:</label>
                <input type="text" class="form-control" id="phone1" />
              </div>

              <div class="form-group">
                <label for="comments1" class="col-form-label">Comments:</label>
                <textarea
                  class="form-control"
                  rows="5"
                  name="textarea"
                  id="comments1"
                ></textarea>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  CLOSE
                </button>
                <button type="submit" class="btn btn-warning">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>