<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md m-4 md:m-0">
        <form>
          <h2 class="text-3xl text-center font-semibold mb-6">Add Job</h2>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2">Job Type</label>
            <select id="type" name="type"
              class="rounded-lg w-full py-3 px-4 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition duration-150 ease-in-out shadow-sm bg-green-50 hover:bg-green-100"
              required>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Job Listing Name</label>
            <input type="text" id="name" name="name"
              class="rounded-lg w-full py-3 px-4 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition duration-150 ease-in-out shadow-sm bg-white mb-2 hover:bg-green-50"
              placeholder="eg. Beautiful Apartment In Miami" required />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">Description</label>
            <textarea id="description" name="description"
              class="rounded-lg w-full py-3 px-4 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition duration-150 ease-in-out shadow-sm bg-white hover:bg-green-50"
              rows="4" placeholder="Add any job duties, expectations, requirements, etc"></textarea>
          </div>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2">Salary</label>
            <select id="salary" name="salary"
              class="rounded-lg w-full py-3 px-4 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition duration-150 ease-in-out shadow-sm bg-green-50 hover:bg-green-100"
              required>
              <option value="Under $50K">under $50K</option>
              <option value="$50K - $60K">$50 - $60K</option>
              <option value="$60K - $70K">$60 - $70K</option>
              <option value="$70K - $80K">$70 - $80K</option>
              <option value="$80K - $90K">$80 - $90K</option>
              <option value="$90K - $100K">$90 - $100K</option>
              <option value="$100K - $125K">$100 - $125K</option>
              <option value="$125K - $150K">$125 - $150K</option>
              <option value="$150K - $175K">$150 - $175K</option>
              <option value="$175K - $200K">$175 - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">
              Location
            </label>
            <input type="text" id="location" name="location"
              class="rounded-lg w-full py-3 px-4 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition duration-150 ease-in-out shadow-sm bg-white mb-2 hover:bg-green-50"
              placeholder="Company Location" required />
          </div>

          <h3 class="text-2xl mb-5">Company Info</h3>

          <div class="mb-4">
            <label for="company" class="block text-gray-700 font-bold mb-2">Company Name</label>
            <input type="text" id="company" name="company"
              class="rounded-lg w-full py-3 px-4 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition duration-150 ease-in-out shadow-sm bg-white hover:bg-green-50"
              placeholder="Company Name" />
          </div>

          <div class="mb-4">
            <label for="company_description" class="block text-gray-700 font-bold mb-2">Company Description</label>
            <textarea id="company_description" name="company_description"
              class="rounded-lg w-full py-3 px-4 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition duration-150 ease-in-out shadow-sm bg-white hover:bg-green-50"
              rows="4" placeholder="What does your company do?"></textarea>
          </div>

          <div class="mb-4">
            <label for="contact_email" class="block text-gray-700 font-bold mb-2">Contact Email</label>
            <input type="email" id="contact_email" name="contact_email"
              class="rounded-lg w-full py-3 px-4 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition duration-150 ease-in-out shadow-sm bg-white hover:bg-green-50"
              placeholder="Email address for applicants" required />
          </div>
          <div class="mb-4">
            <label for="contact_phone" class="block text-gray-700 font-bold mb-2">Contact Phone</label>
            <input type="tel" id="contact_phone" name="contact_phone"
              class="rounded-lg w-full py-3 px-4 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition duration-150 ease-in-out shadow-sm bg-white hover:bg-green-50"
              placeholder="Optional phone for applicants" />
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              type="submit">
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>