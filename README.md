# UFOs!

## Overview
This scope of this project is to take a large dataset of UFO sightings and use user entered filters to scale down the information so you can view it in useable pieces.
This project introduces basic dataset handling using JavaScript and shows how to showcase our data on a webpage so others can use our information.

## Results
### Compare sighting information
This webpage can be used to see if UFO sightings are more common in some states vs. others, on a specific day, or even if one shape of a sighting is more common that others.
Enter mi in the state field to see only one sighting in Michigan:
![mi](https://user-images.githubusercontent.com/86027932/132145681-e3b61234-7a8c-4005-a051-4e736333d764.png)

Enter ca in the state field to see many sightings in California in January 2010:
![ca](https://user-images.githubusercontent.com/86027932/132145687-354f5133-ee5a-46ee-988f-df42c8996381.png)



### Search for specific sighting data
If you are looking for details of sightings on a specific day in a specific city you can search for the details using multiple filters:
Enter 1/1/2010 in the Date field and benton in the City field to find the one sighting in Benton, AR on January 1st:
![specific](https://user-images.githubusercontent.com/86027932/132145691-7e6757bf-2576-468a-95e9-ef1db2dac4ba.png)



##Summary
One drawback of this page is the data we are pulling from is very small, it only covers January of 2010 in the United States. 

The search is limited for analysis in that you can't do comparisons side by side. It could be useful to have two displays of the same data to compare city/day/state sightings "side by side".
You also can only search for one day at a time, if you wanted to look at all sightings for a given week you have to do 7 searches.
You also have to know your data, a better why to present the searchable info would be to give dropdown boxes so you know what search values are actually available.
