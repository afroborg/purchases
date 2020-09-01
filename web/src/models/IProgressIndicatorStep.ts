export interface IProgressIndicatorStep {
  title: string;
  link?: string;
  status: 'active' | 'inactive';
}