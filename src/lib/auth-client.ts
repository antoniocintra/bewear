interface AuthError {
  error: {
    code: string;
    message: string;
  };
}

interface SignUpOptions {
  name: string;
  email: string;
  password: string;
  fetchOptions: {
    onSuccess: () => void;
    onError: (error: AuthError) => void;
  };
}

export const authClient = {
  signUp: {
    email: async (options: SignUpOptions) => {
      try {
        // TODO: Implement actual authentication logic
        // For now, this is a placeholder that simulates the expected behavior
        console.log("Sign up attempt:", {
          name: options.name,
          email: options.email,
        });

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // For demo purposes, always call onSuccess
        // In real implementation, this would make an actual API call
        options.fetchOptions.onSuccess();
      } catch (error) {
        options.fetchOptions.onError({
          error: {
            code: "UNKNOWN_ERROR",
            message: "An unexpected error occurred",
          },
        });
      }
    },
  },
};
