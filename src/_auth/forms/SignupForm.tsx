import * as z from "zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import Loader from "@/components/shared/Loader";
// import { useToast } from "@/components/ui/use-toast";

// import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queries";
// import { SignupValidation } from "@/lib/validation";
// import { useUserContext } from "@/context/AuthContext";

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const SignupForm = () => {
  // const { toast } = useToast();
  const navigate = useNavigate();
  // const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  // Queries
  // const { mutateAsync: createUserAccount, isLoading: isCreatingAccount } = useCreateUserAccount();
  // const { mutateAsync: signInAccount, isLoading: isSigningInUser } = useSignInAccount();

  // Handler
  // const handleSignup = async (user: z.infer<typeof SignupValidation>) => {
  //   try {
  //     const newUser = await createUserAccount(user);

  //     if (!newUser) {
  //       toast({ title: "Sign up failed. Please try again.", });
        
  //       return;
  //     }

  //     const session = await signInAccount({
  //       email: user.email,
  //       password: user.password,
  //     });

  //     if (!session) {
  //       toast({ title: "Something went wrong. Please login your new account", });
        
  //       navigate("/sign-in");
        
  //       return;
  //     }

  //     const isLoggedIn = await checkAuthUser();

  //     if (isLoggedIn) {
  //       form.reset();

  //       navigate("/");
  //     } else {
  //       toast({ title: "Login failed. Please try again.", });
        
  //       return;
  //     }
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };

  return (
    <div>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="enter your username" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  </div>
  );
};

export default SignupForm;