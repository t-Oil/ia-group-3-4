import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { split } from 'lodash';

@Injectable()
export class CitizenService {
  async validate({ citizenId }): Promise<boolean> {
    try {
      return await Promise.all(split(citizenId, ''))
        .then((splitIds) => {
          splitIds.pop();
          return splitIds;
        })
        .then(async (splitIds) => {
          const ids = [];
          let multiplier = 13;

          for await (const splitId of splitIds) {
            ids.push(+splitId * multiplier);
            multiplier--;
          }
          return ids;
        })
        .then((ids) => {
          return ids.reduce((sum, id) => {
            return sum + id;
          });
        })
        .then((sumCitizen) => {
          return sumCitizen % 11;
        })
        .then((modCitizen) => {
          return 11 - modCitizen;
        })
        .then((subtractCitizen) => {
          const getDigit = split(subtractCitizen, '');
          return +getDigit.pop();
        })
        .then((digit) => {
          const id = split(citizenId, '');
          const lastDigit = id.pop();

          if (digit !== +lastDigit) {
            throw HttpStatus.BAD_REQUEST;
          }

          return true;
        });
    } catch (error) {
      CitizenService.citizenIdInValid();
    }
  }

  private static citizenIdInValid() {
    throw new HttpException(
      {
        success: false,
        error_code: '001',
        error_msg: 'citizen_id invalid',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
