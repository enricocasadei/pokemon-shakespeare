import React, { Component, ErrorInfo, ReactNode } from "react";

import { ErrorText } from "./UI/ErrorText";

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  {
    children: ReactNode;
  },
  State
> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorText>Unexpected error!</ErrorText>;
    }

    return this.props.children;
  }
}
