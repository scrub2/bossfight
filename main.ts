namespace SpriteKind {
    export const Object = SpriteKind.create()
    export const gun = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setTilemap(tilemap`level1`)
    spr_mc.setPosition(130, 95)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(spr_mc.x)
    console.log(spr_mc.y)
    level2_right()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gun, function (sprite, otherSprite) {
    gun.destroy()
    gun2 = 1
})
function level1 () {
    tiles.setTilemap(tilemap`level4`)
    spr_mc.setPosition(130, 95)
    obj_key = sprites.create(img`
        . . . . . . . . . 
        . . . 5 5 5 . . . 
        . . . 5 . 5 . . . 
        . . . 5 5 5 . . . 
        . . . . 5 . . . . 
        . . . . 5 5 . . . 
        . . . . 5 5 . . . 
        `, SpriteKind.Object)
    obj_key.setPosition(183, 183)
    level = 1
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile15`, function (sprite, location) {
    button4 = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gun2 > 0) {
        if (spr_mc.vx != 0 || spr_mc.vy != 0) {
            bullet = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            bullet.setPosition(spr_mc.x, spr_mc.y)
            bullet.lifespan = 2000
            if (controller.down.isPressed()) {
                if (controller.left.isPressed()) {
                    bullet.setVelocity(-50, 50)
                } else if (controller.right.isPressed()) {
                    bullet.setVelocity(50, 50)
                } else {
                    bullet.setVelocity(0, 50)
                }
            } else if (controller.left.isPressed()) {
                if (controller.up.isPressed()) {
                    bullet.setVelocity(-50, -50)
                } else if (controller.down.isPressed()) {
                    bullet.setVelocity(-50, 50)
                } else {
                    bullet.setVelocity(-50, 0)
                }
            } else if (controller.right.isPressed()) {
                if (controller.up.isPressed()) {
                    bullet.setVelocity(50, -50)
                } else if (controller.down.isPressed()) {
                    bullet.setVelocity(50, 50)
                } else {
                    bullet.setVelocity(50, 0)
                }
            } else if (controller.up.isPressed()) {
                if (controller.left.isPressed()) {
                    bullet.setVelocity(-50, -50)
                } else if (controller.right.isPressed()) {
                    bullet.setVelocity(50, -50)
                } else {
                    bullet.setVelocity(0, -50)
                }
            }
            bullet.setVelocity(bullet.vx + spr_mc.vx, bullet.vy + spr_mc.vy)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    level2_right()
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile11`, function (sprite, location) {
    button1 = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    level2()
    spr_mc.setPosition(52, 103)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setVelocity(otherSprite.vx + 0, otherSprite.vy + 0)
    otherSprite.setVelocity(sprite.vx + 10, sprite.vy + 10)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile13`, function (sprite, location) {
    button2 = 1
})
function level2 () {
    tiles.setTilemap(tilemap`level5`)
}
function fn_vars () {
    if (spr_mc.vx != 0 || spr_mc.vy != 0) {
        return true
    } else {
        return false
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setTilemap(tilemap`level11`)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile14`, function (sprite, location) {
    button3 = 1
})
function level2_right () {
    tiles.setTilemap(tilemap`level8`)
    spr_mc.setPosition(23, 120)
    box = sprites.create(img`
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `, SpriteKind.Enemy)
    box.setPosition(38, 101)
    box.fx = 1000
    box.fy = 1000
    box.setFlag(SpriteFlag.GhostThroughSprites, false)
    box.setFlag(SpriteFlag.Ghost, false)
    box2 = sprites.create(img`
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `, SpriteKind.Enemy)
    box2.setFlag(SpriteFlag.GhostThroughSprites, false)
    box2.setPosition(136, 41)
    box2.fx = 1000
    box2.fy = 1000
    box3 = sprites.create(img`
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `, SpriteKind.Enemy)
    box3.setFlag(SpriteFlag.GhostThroughSprites, false)
    box3.setPosition(59, 29)
    box3.fx = 1000
    box3.fy = 1000
    box3 = sprites.create(img`
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e 4 4 4 4 4 4 4 4 4 4 e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `, SpriteKind.Enemy)
    box3.setFlag(SpriteFlag.GhostThroughSprites, false)
    box3.setPosition(42, 33)
    box3.fx = 1000
    box3.fy = 1000
    gun = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.gun)
    gun.setPosition(130, 125)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
        otherSprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.vx += spr_mc.vx
    otherSprite.vy += spr_mc.vy
})
let box3: Sprite = null
let box2: Sprite = null
let box: Sprite = null
let button3 = 0
let button2 = 0
let button1 = 0
let bullet: Sprite = null
let button4 = 0
let level = 0
let obj_key: Sprite = null
let gun2 = 0
let gun: Sprite = null
let spr_mc: Sprite = null
spr_mc = sprites.create(img`
    . . . . . . . . . 
    . . . . . . . . . 
    . . . 8 8 8 . . . 
    . . . f 8 f . . . 
    . . . 8 8 8 . . . 
    . . . 8 8 8 . . . 
    . . . 8 . 8 . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(spr_mc)
controller.moveSprite(spr_mc)
level1()
game.onUpdateInterval(500, function () {
    if (button1 == 1) {
        if (button2 == 1) {
            if (button3 == 1) {
                if (button4 == 1) {
                    tiles.setTilemap(tilemap`level9`)
                }
            }
        }
    }
    button1 = 0
    button2 = 0
    button3 = 0
    button4 = 0
})
game.onUpdateInterval(300, function () {
    if (fn_vars()) {
        animation.runImageAnimation(
        spr_mc,
        [img`
            . . . . . . . . . 
            . . . . . . . . . 
            . . . 8 8 8 . . . 
            . . . f 8 f . . . 
            . . . 8 8 8 . . . 
            . . . 8 8 8 . . . 
            . . . 8 . . . . . 
            `,img`
            . . . . . . . . . 
            . . . . . . . . . 
            . . . 8 8 8 . . . 
            . . . f 8 f . . . 
            . . . 8 8 8 . . . 
            . . . 8 8 8 . . . 
            . . . . . 8 . . . 
            `,img`
            . . . . . . . . . 
            . . . . . . . . . 
            . . . 8 8 8 . . . 
            . . . f 8 f . . . 
            . . . 8 8 8 . . . 
            . . . 8 8 8 . . . 
            . . . 8 . 8 . . . 
            `],
        100,
        false
        )
    }
})
