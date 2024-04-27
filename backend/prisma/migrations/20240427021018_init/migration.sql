/*
  Warnings:

  - You are about to drop the column `personaId` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Chat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_personaId_fkey";

-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_memberId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_yourName_fkey";

-- DropIndex
DROP INDEX "Chat_personaId_key";

-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "personaId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "color" TEXT,
ADD COLUMN     "profilePictureURL" TEXT;

-- DropTable
DROP TABLE "Profile";

-- CreateIndex
CREATE UNIQUE INDEX "Chat_userId_key" ON "Chat"("userId");

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
