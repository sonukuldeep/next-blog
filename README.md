# Nextjs blog website

This repo has 3 branches
* main
* embaddedSanityNext
* previewmode (may not be maintainerd now)

The main branch has a seperate sanity vite app while embaddedSanityNext it is intergrated into the same nextjs app

If reusing the code try to avoid preview mode in sanity dashboard app,
I found the preview mode to be buggy, with missing data parameters which break the preview at this stage.
Essentially the data in the draft isn't available to preview ex. Image links will be missing, tags will be missing etc

Just create the app with or without sanity integration as per requirements. 