import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  private jwtService: JwtService;
  canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {

    // this.jwtService.decode(token);
    return true;
  }
}
