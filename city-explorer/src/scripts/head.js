<head>
<meta charset="UTF-8"></meta>
<title>City Explorer</title>
<link rel="stylesheet" href="./styles/app.css"></link>
<link href="https://fonts.googleapis.com/css?family=Acme|Josefin+Sans|Muli" rel="stylesheet"></link>
    

<script type="text/x-handlebars-template" id="error-template">
  <p> {{ responseText }}</p>
</script>


<script type="text/x-handlebars-template" id="weather-results-template">
  <li>
    The forecast for {{ time }} is: {{ forecast }}
  </li>
</script>


<script type="text/x-handlebars-template" id="yelp-results-template">
  <li>
    <a href="{{ url }}">{{ name }}</a>
    <p>The average rating is {{ rating }} out of 5 and the average cost is {{ price }} out of 4</p>
    <img src="{{ image_url }}"></img>
  </li>
</script>


<script type="text/x-handlebars-template" id="meetups-results-template">
  <li>
    <a href="{{ link }}">{{ name }}</a>
    <p>Hosted by: {{ host }}</p>
    <p>Created on: {{ creation_date }}</p>
  </li>
</script>


<script type="text/x-handlebars-template" id="movies-results-template">
  <li>
    <p><span>{{ title }}</span> was relased on {{ released_on }}. Out of {{ total_votes }} total votes, {{title}} has an average vote of {{ average_votes }} and a popularity score of {{ popularity }}.</p>
    <img src="{{ image_url }}"></img>
    <p>{{ overview }}</p>
  </li>
</script>


<script type="text/x-handlebars-template" id="trails-results-template">
  <li>
    <p>Hike Name: <a href="{{ trail_url }}">{{ name }}</a>, Location: {{ location }}, Distance: {{ length }} miles</p>
    <p>On {{ condition_date }} at {{ condition_time }}, trail conditions were reported as: {{ conditions }}</p>
    <p>This trail has a rating of {{ stars }} stars (out of {{ star_votes }} votes)</p>
    <p>{{ summary }}</p>
  </li>
</script>

</head>