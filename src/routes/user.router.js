/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: John Doe
 *                   email:
 *                     type: string
 *                     example: john.doe@example.com
 */
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
  });
  