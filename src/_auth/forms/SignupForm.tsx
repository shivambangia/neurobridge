import * as z from "zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignupValidation } from "@/lib/validation";
import { Loader } from "lucide-react";
// import Loader from "@/components/shared/Loader";
// import { useToast } from "@/components/ui/use-toast";

// import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queries";
// import { SignupValidation } from "@/lib/validation";
// import { useUserContext } from "@/context/AuthContext";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const SignupForm = () => {
  const isLoading=false;

  // const { toast } = useToast();
  const navigate = useNavigate();
  // const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignupValidation>) {
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
       <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Create a new account
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          To use snapgram, Please enter your details
        </p>
    </div>  


    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input type = "Name" placeholder="enter your username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type = "username" placeholder="enter your username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />


<FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type = "email" placeholder="enter your username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />


<FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type = "password" placeholder="enter your username" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit" className="shad-button_primary">
        {isLoading?(
          <div className="flex-center gap-2">
<Loader />          

</div>
        ):"Sign Up"}
        </Button>
    </form>
  </Form>
  </div>
  );
};

export default SignupForm;