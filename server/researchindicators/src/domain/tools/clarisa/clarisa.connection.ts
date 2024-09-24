import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { env } from 'process';
import { BadRequestException } from '@nestjs/common';

export class Clarisa {
  private clarisaHost: string;
  private token: string;
  private http: HttpService;
  constructor(http: HttpService) {
    this.clarisaHost = env.MS_CLARISA_HOST + 'api/';
    this.http = http;
  }

  public async post<T, X = T>(path: string, data: T): Promise<X> {
    return firstValueFrom(
      this.http.post<X>(this.clarisaHost + path, data).pipe(
        map(({ data }) => {
          return data;
        }),
      ),
    ).catch((err) => {
      throw new BadRequestException(err);
    });
  }

  public async get<T>(path: string): Promise<T> {
    return firstValueFrom(
      this.http.get<T>(this.clarisaHost + path).pipe(
        map(({ data }) => {
          return data;
        }),
      ),
    ).catch((err) => {
      throw new BadRequestException(err);
    });
  }
}