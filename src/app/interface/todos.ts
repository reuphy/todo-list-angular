export interface Error {
    message: string;
    status: number;
  }
  
  export interface HttpRequestState<T> {
    isLoading: boolean;
    value?: T;
    error?: Error
  }
  export interface FetchTodoResponse<T> {
    message: string;
    taksList: T;
  }