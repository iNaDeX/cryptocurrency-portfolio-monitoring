export class Holding {
	id       : number; // TODO: remove ? symbol is already supposed to be unique
	symbol   : string;
	name     : string;
	quantity : number;
    rate     : number;
}

// TODO: add support for historical data, 24h changes, etc..
// TODO: add holding image icon