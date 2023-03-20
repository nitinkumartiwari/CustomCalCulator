import React from "react";

interface IErrorState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<any, IErrorState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo, "Error Occured Somewhere");
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error Page</h1>;
    }

    return this.props.children; // it will render particular component
  }
}
export default ErrorBoundary;
