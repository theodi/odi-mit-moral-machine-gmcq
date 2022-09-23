# odi-mit-moral-machine-gmcq

Component based upon the **Graphical Multiple Choice Question (GMCQ)** component. For notes in installation plese see the Installation instructions for the GMCQ component. 

## Settings overview !IMPORTANT

This compoenent presents scenarios that people can chose between. As the choice is based upon individual ethics and beliefs of what is right and wrong, there are no right and wrong answers! 

As a result of this, all answers are marked as correct.

### Attributes

Most of the attributes are inherited from GMCQ however when uploading images it is important to define the results of the persons choice. This becomes clear as you create the images using the MIT Moral Machine scenario generator available at (https://www.moralmachine.net/ and click Design at the top).

## Limitations

In order for this component to work correctly alongside the odi Moral Machine Assessment results component. Reset on revist should be set to False. 

The assessment should have "Allow retry once passed?" set to true with the reset type set to soft. 

The Assessment results component should have the reset type also set to soft and reset when revisited set to false!

Even with this all set, if people change their answers and reload, it appears to break some of the time.
