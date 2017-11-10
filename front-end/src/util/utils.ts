import {Response} from '@angular/http';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {Observable} from 'rxjs/Observable';

/**
 * @author Alex Brui
 */
export class Utils {

  /**
   * The method to handle an error from http request.
   *
   * @param error the error.
   * @param handler the error message consumer.
   * @returns {ErrorObservable}
   */
  static handleErrorMessage(error: Response | any, handler: (value: string) => void): ErrorObservable {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = error.text();
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    handler(errMsg);
    return Observable.throw(errMsg);
  }

  /**
   * The method to handle an error from http request.
   *
   * @param error the error from the Json obj.
   * @param handler the error message consumer.
   * @returns {ErrorObservable}
   */
  static handleErrorMessageJson(error: Response | any, handler: (value: string) => void): ErrorObservable {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json();
      errMsg = body.message;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    handler(errMsg);
    return Observable.throw(errMsg);
  }

  /**
   * The method to handle an error from http request.
   *
   * @param {Response | any} error the error.
   * @returns {Promise<never>} the error msg.
   */
  static handleError(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
