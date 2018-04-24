# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## PROJECT INFORMATION

The website lets users input their cryptocurrency assets, in the form of:
- a symbol (ex: BTC)
- a name (ex: Bitcoin)
- a quantity owned (ex: 0.5)

The website lets users easily monitor the value of their investments through a table of investments sorted by value and a pie chart showing the distribution of investments.

This list of assets can later be viewed, changed and deleted by the user. 
The user can also choose via a button to store this information locally in the web browser (in LocalStorage).
The website calls an external API to get the exchange rate of the coins owned by the user. 
This API call is automatically relaunched every 10 minutes to keep data up to date.