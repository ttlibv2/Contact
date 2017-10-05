
import { Dimension, ValueRenderOption, DateTimeRenderOption, ValueRange } from "./sheet-v4.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class SheetV4Service {
    readonly rootUrl: string = 'https://sheets.googleapis.com/v4/spreadsheets';
    apiKey: string = null;
    //spreadsheetId: string = null;

    constructor(private http: Http) { }

    copyTo() { }

    /** 
     * Returns a range of values from a spreadsheet 
     * GET https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}
     * 
     * @param {string=} params.spreadsheetId The ID of the spreadsheet to retrieve data from.
     * @param {string=} params.range The A1 notation of the values to retrieve.
     * @param {Dimension=} params.majorDimension The major dimension that results should use.
     * @param {ValueRenderOption} params.valueRenderOption How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
     * @param {DateTimeRenderOption} params.dateTimeRenderOption How dates, times, and durations should be represented in the output. This is ignored if valueRenderOption is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
     * @returns If successful, the response body contains an instance of ValueRange.
    */
    getValues(request: { spreadsheetId: string, range: string, majorDimension?: Dimension, valueRenderOption?: ValueRenderOption, dateTimeRenderOption?: DateTimeRenderOption }): Observable<ValueRange> {
        let uri = `${this.rootUrl}/${request.spreadsheetId}/values/${request.range}?key=${this.apiKey}`;
        return this.http.get(uri).map(res => { return res.json(); });
    }

    /** 
     * Returns a range of values from a spreadsheet 
     * GET https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchGet
     * 
     * @param {string=} params.spreadsheetId The ID of the spreadsheet to retrieve data from.
     * @param {string[]=} params.ranges The A1 notation of the values to retrieve.
     * @param {Dimension=} params.majorDimension The major dimension that results should use.
     * @param {ValueRenderOption} params.valueRenderOption How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
     * @param {DateTimeRenderOption} params.dateTimeRenderOption How dates, times, and durations should be represented in the output. This is ignored if valueRenderOption is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
     * @returns If successful, the response body contains an instance of ValueRange[].
    */
    batchGetValues(request: { spreadsheetId: string, ranges: string[], majorDimension?: Dimension, valueRenderOption?: ValueRenderOption, dateTimeRenderOption?: DateTimeRenderOption }): Observable<ValueRange[]> {
        return null;
    }

    /** 
   * Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
   * POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:clear
   * 
   * @param {string=} params.spreadsheetId The ID of the spreadsheet to update.
   * @param {string[]=} params.range The A1 notation of the values to clear.
   * @returns The response when clearing a range of values in a spreadsheet. => {"spreadsheetId": string,"clearedRange": string,}
  */
    clear(request: { spreadsheetId: string, range: string }) { }

}