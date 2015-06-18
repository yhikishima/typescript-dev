// mainController.ts
/// <reference path="../../typings/tsd.d.ts" />

export interface MinScope extends ng.IScope {
  content: string;
  items: app.models.Item[];
  add(item: string): void;
}
