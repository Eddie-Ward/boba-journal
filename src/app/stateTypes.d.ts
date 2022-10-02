import { EntityId } from "@reduxjs/toolkit";

export interface EntryJournal {
	ENTRY_ID: EntityId;
	date: string;
	rating: number;
	drink: string;
	comment: string;
	locationName: string;
	placeID: EntityId;
}

export interface StoreLocation {
	lat: number;
	lng: number;
	PLACE_ID: EntityId;
	locationName: string;
	address: string;
	priceLevel: number;
	rating: number;
	totalRatings: number;
	journalEntryIDs: EntityId[];
}

export interface EntryTierlist {
	ENTRY_ID: EntityId;
	journalEntryIDS: EntityId[];
	placeID: EntityId;
	ranking: number;
}