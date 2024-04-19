class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location

        this.bodyX = 300;
        this.bodyY = 350;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 20;

        this.left_legX = this.bodyX - 50;
        this.left_legY = this.bodyY + 100;
        this.right_legX = this.bodyX + 50;
        this.right_legY = this.bodyY + 100;

        this.left_armX = this.bodyX - 90;
        this.left_armY = this.bodyY + 50;
        this.right_armX = this.bodyX + 90;
        this.right_armY = this.bodyY + 50;

        this.mouthX = this.bodyX ;
        this.mouthY = this.bodyY + 40;

        this.left_hornX = this.bodyX - 50;
        this.left_hornY = this.bodyX - 20;
        this.right_hornX = this.bodyX + 50;
        this.right_hornY = this.bodyX - 20;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.left_arm = this.add.sprite(this.left_armX, this.left_armY, "monsterParts", "arm_greenB.png");
        my.sprite.left_arm.flipX = true;
        my.sprite.right_arm = this.add.sprite(this.right_armX, this.right_armY, "monsterParts", "arm_greenB.png");

        my.sprite.left_leg = this.add.sprite(this.left_legX, this.left_legY, "monsterParts", "leg_greenC.png");
        my.sprite.left_leg.flipX = true;
        my.sprite.right_leg = this.add.sprite(this.right_legX, this.right_legY, "monsterParts", "leg_greenC.png");

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human_green.png");

        my.sprite.mouth_happy = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.mouth_teeth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthJ.png");
        my.sprite.mouth_teeth.visible = false;

        my.sprite.left_horn = this.add.sprite(this.left_hornX, this.left_hornY, "monsterParts", "detail_green_horn_large.png");
        my.sprite.left_horn.flipX = true;
        my.sprite.right_horn = this.add.sprite(this.right_hornX, this.right_hornY, "monsterParts", "detail_green_horn_large.png");

        let smile;
        this.smile = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let teeth;
        this.teeth = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        let left;
        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        let right;
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (Phaser.Input.Keyboard.JustDown(this.smile)) { 
            my.sprite.mouth_happy.visible = true;
            my.sprite.mouth_teeth.visible = false;
        }
        if (Phaser.Input.Keyboard.JustDown(this.teeth)) {
            my.sprite.mouth_teeth.visible = true;
            my.sprite.mouth_happy.visible = false;
        }
       
        const speed = 5;
        if (this.left.isDown) {
            my.sprite.left_arm.x = my.sprite.left_arm.x - speed;
            my.sprite.right_arm.x = my.sprite.right_arm.x - speed;
            my.sprite.left_leg.x = my.sprite.left_leg.x - speed;
            my.sprite.right_leg.x = my.sprite.right_leg.x - speed;
            my.sprite.body.x = my.sprite.body.x - speed;
            my.sprite.eye.x = my.sprite.eye.x - speed;
            my.sprite.mouth_happy.x = my.sprite.mouth_happy.x - speed;
            my.sprite.mouth_teeth.x = my.sprite.mouth_teeth.x - speed;
            my.sprite.left_horn.x = my.sprite.left_horn.x - speed;
            my.sprite.right_horn.x = my.sprite.right_horn.x - speed;
        }
        if (this.right.isDown) {
            my.sprite.left_arm.x = my.sprite.left_arm.x + speed;
            my.sprite.right_arm.x = my.sprite.right_arm.x + speed;
            my.sprite.left_leg.x = my.sprite.left_leg.x + speed;
            my.sprite.right_leg.x = my.sprite.right_leg.x + speed;
            my.sprite.body.x = my.sprite.body.x + speed;
            my.sprite.eye.x = my.sprite.eye.x + speed;
            my.sprite.mouth_happy.x = my.sprite.mouth_happy.x + speed;
            my.sprite.mouth_teeth.x = my.sprite.mouth_teeth.x + speed;
            my.sprite.left_horn.x = my.sprite.left_horn.x + speed;
            my.sprite.right_horn.x = my.sprite.right_horn.x + speed;
        }
    }

}
