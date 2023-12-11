export interface ButtonComponentProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface AsButtonComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as: "button";
}

export interface UnsafeDivAsButtonComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
