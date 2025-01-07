<body>
<header>
<h1>Lightning Dashboard</h1>
<p>Deployed Link: <a href="https://lightning-dashboard.vercel.app/" target="_blank" rel="noopener noreferrer">View Deployed Dashboard</a></p>
</header>

<main>
<section>
<h2>Running Locally</h2>
<p>To run this project locally, follow these steps:</p>
<pre>
npm install
npm run dev
</pre>
</section>

<section>
<h3>Dynamic Data Based on Date Query</h3>
<p>
The rest of the website, such as the sidebar, navbar, and styling, were relatively easy to implement and required time to fine-tune. However, the main challenge was fetching dynamic data based on the date in the query.
</p>
<p>
The data is fetched from a <code>data.json</code> file, and the information is displayed in the form of an overview, pie charts, graphs, and recent transactions.
</p>
<p>
I used custom hook, and <code>react-router-dom</code> to capture the date from the URL. By default, the date is set to <strong>01-01-2025</strong>. However, if a date is specified, I use:
</p>
<pre>
const query = new URLSearchParams(useLocation().search);
</pre>
<p>
This allows me to search the data according to the specified date. Once the data is retrieved, I update it using <code>useEffect</code> so that the data is updated dynamically, even when the user changes the date.
</p>
</section>

<section>
<h3>Calculating Sales Increase/Decrease</h3>
<p>
The second challenge was calculating the increase or decrease in sales. For the first data entry, the default value is <strong>0%</strong>, but for subsequent days, I calculate the change using the results from the previous day.
</p>
</section>
</main>

</body>
