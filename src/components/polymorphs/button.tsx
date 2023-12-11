import type {
  AsButtonComponentProps,
  ButtonComponentProps,
} from "@/types/buttons";

// safe to use because this is directly a button element
export const PolymorhpButton = ({
  children,
  ...rest
}: ButtonComponentProps) => {
  return (
    <button
      className="rounded bg-neutral-900 px-4 py-2 font-bold text-white hover:bg-neutral-200 hover:text-neutral-900"
      {...rest}
    >
      {children}
    </button>
  );
};

// safe to use due to the `as` prop and role being set
export const PolymorhpAsButton = ({
  children,
  ...rest
}: AsButtonComponentProps) => {
  return (
    <div
      className="rounded bg-neutral-900 px-4 py-2 font-bold text-white hover:bg-neutral-200 hover:text-neutral-900"
      role="button"
      {...rest}
    >
      {children}
    </div>
  );
};
