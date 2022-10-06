import { EntityId } from "@reduxjs/toolkit";

export type ColorHex = `#${string}`;

export interface EntryJournal {
	ENTRY_ID: EntityId;
	date: number;
	rating: number;
	drink: string;
	comment: string;
	locationName: string;
	placeID: EntityId;
}

export interface StoreLocation {
	PLACE_ID: EntityId;
	lat: number;
	lng: number;
	locationName: string;
	address: string;
	priceLevel: number;
	rating: number;
	totalRatings: number;
	iconURL: string;
	iconBGColor: string;
	journalEntryIDs: EntityId[];
}

export interface EntryTierlist {
	PLACE_ID: EntityId;
	journalEntryIDs: EntityId[];
	locationName: string;
	ranking: number;
	avgRating: number;
}
