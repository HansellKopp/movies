import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAssetPipe } from './movie-asset.pipe';

@NgModule({
  declarations: [MovieAssetPipe],
  imports: [
    CommonModule
  ],
  exports: [
    MovieAssetPipe
  ]
})
export class PipesModule { }
