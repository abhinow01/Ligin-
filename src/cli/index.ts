#!/usr/bin/env node

import { Command } from "commander";
import {build} from "../core/build.js";
const program = new Command();

program
.name("ligin")
.description("A design system automation tool that generates code from design tokens.")
.version("0.1.0");

program
.command("build")
.description("Build the design system by generating code from design tokens ")
.action(async () =>{
    try{
        await build();
        console.log("✅ Build completed successfully.");
    }catch(error){
        console.error("❌ Build failed.")
        if(error instanceof Error){
        console.error(error.message)
    }
    process.exit(1);
    }
    
    
})
program.parse();
