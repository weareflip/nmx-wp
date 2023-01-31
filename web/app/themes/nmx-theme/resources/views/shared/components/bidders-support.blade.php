<div class="bidders-support-component px-lg-8 mb-sm-5" id="bidders-contact-form">
    <a name="tech-contact"></a>

    <div class="container bg-dark-grey text-white px-4 py-5 p-lg-7">
        <div class="red-border-left pl-4 mb-5">
            <h3 class="section-title d-inline-block mb-0 text-left font-x-large">
                The answer you’re looking for wasn’t here?
            </h3>

            <p class="font-medium">
                Get in touch with our technical support team
            </p>
        </div>

        <div>
            <form action="{{ config('services.pardot.support_form_url') }}" method="post" id="bidders_contact_form">
                {{ csrf_field() }}

                <p class="mb-4 text-center text-white py-2 d-none"
                   style="background-color: rgba(0,0,0,0.5); margin-top: -1em" id="bidders_contact_form_message">
                    {{ config('services.pardot.thank_you_message') }}
                </p>

                @if(session('tech_support_message'))
                    <p class="mb-4 text-center text-black py-2 bg-white"
                       style="margin-top: -1em">
                        {{ session('tech_support_message') }}
                    </p>
                @endif

                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="control mb-6">
                            <input name="first-name" type="text" class="input text-white" placeholder="First name" required>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6">
                        <div class="control mb-6">
                            <input name="last-name" type="text" class="input text-white" placeholder="Last name" required>
                        </div>
                    </div>
                </div>

                <div class="control mb-6">
                    <input name="email" type="text" class="input text-white" placeholder="Your email" required>
                </div>

                <div class="control mb-6">
                    <input name="phone" type="text" class="input text-white" placeholder="Your phone">
                </div>

                <div class="control mb-4">
                    <textarea name="message" type="text" class="input text-white expanding-textarea"
                          placeholder="Your message" required></textarea>
                </div>

                <div class="control">
                    <button type="submit" class="button button-full-mobile">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>