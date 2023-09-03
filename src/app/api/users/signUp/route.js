import { connect } from "@/config/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request) {
  // console.log(NextRequest);
  try {
    const requestBody = await request.json();
    const { username, email, password } = requestBody;
    console.log(username, email, password);

    // check if the user Allready exists
    const user = await User.findOne({ email });
    if (user) {
      return response.json({ error: "User already Exists" }, { status: 400 });
    }

    // hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // create a user in the database
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({
      message: "User created successfully!",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
