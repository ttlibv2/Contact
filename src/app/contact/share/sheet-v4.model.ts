/** 
 * Indicates which dimension an operation should apply to. 
 */
export enum Dimension {
    DIMENSION_UNSPECIFIED,	//The default value, do not use.
    ROWS,	//Operates on the rows of a sheet.
    COLUMNS, //	Operates on the columns of a sheet.
}

/**
 * Determines how values should be rendered in the the output.
 */
export enum ValueRenderOption {
    
    /**
     * 	Values will be calculated & formatted in the reply according to the cell's formatting. Formatting is based on the spreadsheet's locale, not the requesting user's locale. For example, if A1 is 1.23 and A2 is =A1 and formatted as currency, then A2 would return "$1.23".
     */
    FORMATTED_VALUE,

    /**
     * Values will be calculated, but not formatted in the reply. For example, if A1 is 1.23 and A2 is =A1 and formatted as currency, then A2 would return the number 1.23.    
    */
    UNFORMATTED_VALUE,
    
    /**
     * Values will not be calculated. The reply will include the formulas. For example, if A1 is 1.23 and A2 is =A1 and formatted as currency, then A2 would return "=A1".
     */
    FORMULA
}

/**
 * Determines how dates should be rendered in the the output.
 */
export enum DateTimeRenderOption {
    /**
     * Instructs date, time, datetime, and duration fields to be output as doubles in "serial number" format, as popularized by Lotus 1-2-3. The whole number portion of the value (left of the decimal) counts the days since December 30th 1899. The fractional portion (right of the decimal) counts the time as a fraction of the day. For example, January 1st 1900 at noon would be 2.5, 2 because it's 2 days after December 30st 1899, and .5 because noon is half a day. February 1st 1900 at 3pm would be 33.625. This correctly treats the year 1900 as not a leap year.
     */
    SERIAL_NUMBER,

    /**
     * Instructs date, time, datetime, and duration fields to be output as strings in their given number format (which is dependent on the spreadsheet locale).
     */
    FORMATTED_STRING

}

export interface ValueRange {
    range?: string;
    majorDimension?:string;
    values?: any[][];
    dateTimeRenderOption?: string;
    valueRenderOption?: string;
    alt?: string;
}

export interface AppendRequest {}

export interface ClearRequest {}

export interface BatchClearRequest {}

export interface GetRequest {}

export interface BatchGetRequest {}

export interface UpdateRequest {}

export interface BatchUpdateRequest {}

