# company-hierarchy-ui

This repo contains a react component which will display the hierarchy of a company.

Run npm start to view ui

## Integration test

Ensure you have run "npm run stub:api" first.

Notes:

- Will need to assess the actual back end data and refactor to indicate hierarchy in the data. This should be handled in the back end
- Yet to add in the lines to create the actual hierarchy as unsure of best solution to implement with current data set.
- Currently rendering the cards but have not defined hiearchies

Possible solutions to handling hierarchies is to either make another Api call to generate the hierarchy via the roles of each employee and use the two data sets to determine how to render the org chart or change the data being fed in initially to include an indicator of hierarchy.
